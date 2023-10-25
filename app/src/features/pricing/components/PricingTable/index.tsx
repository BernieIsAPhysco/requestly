import React, { useCallback, useState } from "react";
import { Col, Row, Space, Tag, Typography } from "antd";
import { RQButton } from "lib/design-system/components";
import { useSelector } from "react-redux";
import { getUserAuthDetails } from "store/selectors";
import { PricingFeatures } from "../../constants/pricingFeatures";
import { PricingPlans } from "../../constants/pricingPlans";
import { capitalize } from "lodash";
import { redirectToCheckout } from "utils/RedirectionUtils";
import underlineIcon from "../../assets/yellow-highlight.svg";
import checkIcon from "assets/img/icons/common/check.svg";
import { CloseOutlined } from "@ant-design/icons";
import APP_CONSTANTS from "config/constants";
import "./index.scss";

interface PricingTableProps {
  product?: string;
  workspaceToUpgrade?: any;
  duration?: string;
}

const PRIVATE_WORKSPACE = {
  name: APP_CONSTANTS.TEAM_WORKSPACES.NAMES.PRIVATE_WORKSPACE,
  id: "private_workspace",
  accessCount: 1,
};

const PricingTable: React.FC<PricingTableProps> = ({
  duration = "annually",
  workspaceToUpgrade = PRIVATE_WORKSPACE,
  product = APP_CONSTANTS.PRICING.PRODUCTS.HTTP_RULES,
}) => {
  const user = useSelector(getUserAuthDetails);
  const [, setIsContactUsModalOpen] = useState(false);

  const renderButtonsForPlans = useCallback(
    (planName: string) => {
      const { details } = user || {};
      const userPlanType = details?.planDetails?.type;
      const isSelectedWorkspacePremium = workspaceToUpgrade?.subscriptionStatus === "active";
      const isPrivateWorkspaceSelected = workspaceToUpgrade?.id === PRIVATE_WORKSPACE.id;
      const userPlanName = details?.planDetails?.planName;

      const shouldRenew = details?.planDetails?.status !== "active" && details?.planDetails?.planName === planName;

      const shouldContactUs =
        (user?.details?.isPremium && userPlanType === "team" && !isPrivateWorkspaceSelected) ||
        (user?.details?.isPremium && userPlanType !== "team" && isPrivateWorkspaceSelected) ||
        (!user?.details?.isPremium && shouldRenew);

      if (planName === userPlanName) {
        return <div className="current-pricing-plan-tag">Current Plan</div>;
      }

      if (shouldContactUs) {
        return (
          <RQButton onClick={() => setIsContactUsModalOpen(true)} type="primary">
            Contact us
          </RQButton>
        );
      }

      if (shouldRenew) {
        return (
          <>
            <RQButton
              onClick={() =>
                redirectToCheckout({
                  mode: isPrivateWorkspaceSelected ? "individual" : "team",
                  planName: planName,
                  duration: duration,
                  quantity: workspaceToUpgrade?.accessCount,
                  teamId: isPrivateWorkspaceSelected ? null : workspaceToUpgrade?.id,
                })
              }
              type="primary"
            >
              Renew
            </RQButton>
            {<Tag className="current-plan">Expired</Tag>}
          </>
        );
      }

      if (product === APP_CONSTANTS.PRICING.PRODUCTS.SESSION_REPLAY) {
        if (planName === APP_CONSTANTS.PRICING.PLAN_NAMES.FREE) {
          return (
            <>
              <RQButton onClick={() => (window.location.href = "/")} type="primary">
                Use now
              </RQButton>
              <Tag className="current-plan">Current Plan</Tag>
            </>
          );
        }

        return (
          <RQButton onClick={() => setIsContactUsModalOpen(true)} type="primary">
            Contact us
          </RQButton>
        );
      }

      if (
        user?.details?.isPremium &&
        (isSelectedWorkspacePremium || isPrivateWorkspaceSelected) &&
        planName === userPlanName
      ) {
        return (
          <RQButton disabled type="primary">
            Current Plan
          </RQButton>
        );
      }

      return (
        <RQButton
          onClick={() =>
            redirectToCheckout({
              mode: isPrivateWorkspaceSelected ? "individual" : "team",
              planName: planName,
              duration: duration,
              quantity: workspaceToUpgrade?.accessCount,
              teamId: isPrivateWorkspaceSelected ? null : workspaceToUpgrade?.id,
            })
          }
          disabled={userPlanName === APP_CONSTANTS.PRICING.PLAN_NAMES.PROFESSIONAL}
          type="primary"
        >
          Upgrade now
        </RQButton>
      );
    },
    [duration, product, user, workspaceToUpgrade]
  );

  return (
    <Row wrap={false} className="pricing-table">
      {Object.entries(PricingFeatures[APP_CONSTANTS.PRICING.PRODUCTS.HTTP_RULES]).map(([planName, planDetails]) => {
        const planPrice = PricingPlans[planName as keyof typeof PricingPlans]?.plans["annually"]?.usd?.price;
        return (
          <Col key={planName} className="plan-card">
            <Typography.Text className="plan-name">{capitalize(planName)}</Typography.Text>
            {planPrice !== undefined && (
              <Row align="middle">
                <Space size="small">
                  <Typography.Text strong className="plan-price">
                    ${planPrice / 12}
                  </Typography.Text>
                  <Typography.Text>/ month per member</Typography.Text> {/*TODO: Hide this for free plan */}
                </Space>
              </Row>
            )}
            {planDetails?.planDescription && (
              <Row>
                <Typography.Text type="secondary" className="plan-description">
                  {planDetails.planDescription}
                </Typography.Text>
              </Row>
            )}
            {planName !== APP_CONSTANTS.PRICING.PLAN_NAMES.ENTERPRISE && (
              <Row className="mt-8">
                <Typography.Text type="secondary">Billed annually</Typography.Text>
              </Row>
            )}
            <Row className="mt-16">{renderButtonsForPlans(planName)}</Row>
            <Row>
              {planName !== APP_CONSTANTS.PRICING.PLAN_NAMES.FREE &&
                product !== APP_CONSTANTS.PRICING.PRODUCTS.SESSION_REPLAY && (
                  <div className="pro-basic-feature-title text-left">
                    <span>
                      Everything <img src={underlineIcon} alt="highlight" />
                    </span>{" "}
                    in {planName === APP_CONSTANTS.PRICING.PLAN_NAMES.BASIC ? "Free" : "Basic"} plan, and
                  </div>
                )}
            </Row>
            <Space direction="vertical" className="plan-features-list">
              {planDetails.features.map((feature, index) => (
                <div className="text-left text-gray plan-feature-item" key={index}>
                  {feature.enabled ? <img src={checkIcon} alt="check" /> : <CloseOutlined />} {feature.title}
                </div>
              ))}
            </Space>
          </Col>
        );
      })}
    </Row>
  );
};

export default PricingTable;
