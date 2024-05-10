import React, { useCallback, useState } from "react";
import { useSelector } from "react-redux";
import { getBillingTeamById } from "store/features/billing/selectors";
import EmailInputWithDomainBasedSuggestions from "components/common/EmailInputWithDomainBasedSuggestions";
import { RQButton } from "lib/design-system/components";
import { PostUserAdditionView } from "./components/PostUserAdditionView/PostUserAdditionView";
import { ExternalDomainWarningBanner } from "./components/ExternalDomainWarningBanner/ExternalDomainWarningBanner";
import Logger from "../../../../../../../../../../../../../common/logger";
import "./inviteMembersForm.scss";
import { getFunctions, httpsCallable } from "firebase/functions";

interface InviteMembersFormProps {
  billingId: string;
  toggleInviteFormVisibility: () => void;
  closeAddMembersDrawer: () => void;
}

export const InviteMembersForm: React.FC<InviteMembersFormProps> = ({
  billingId,
  toggleInviteFormVisibility,
  closeAddMembersDrawer,
}) => {
  const billingTeamDetails = useSelector(getBillingTeamById(billingId));
  const [isPostUserAdditionViewVisible, setIsPostUserAdditionViewVisible] = useState(false);
  const [externalDomainEmails, setExternalDomainEmails] = useState([]);
  const [isExternalDomainWarningBannerClosed, setIsExternalDomainWarningBannerClosed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [emails, setEmails] = useState([]);

  const handleAddMembersToBillingTeam = useCallback(() => {
    setIsLoading(true);
    const inviteUsers = httpsCallable(getFunctions(), "billing-createInvite");

    inviteUsers({
      userEmails: emails,
      billingId,
    })
      .then(() => {
        setIsPostUserAdditionViewVisible(true);
      })
      .catch((error) => {
        Logger.log("Error adding members to billing team", error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [billingId, emails]);

  const handleEmailsChange = useCallback(
    (emails: string[]) => {
      setEmails(emails);
      const billingTeamDomain = billingTeamDetails?.ownerDomain;
      const externalDomainEmails = emails.filter((email) => !email.includes(billingTeamDomain));
      setExternalDomainEmails(externalDomainEmails);
    },
    [billingTeamDetails?.ownerDomain]
  );

  if (isPostUserAdditionViewVisible) {
    return (
      <PostUserAdditionView
        toggleInviteFormVisibility={toggleInviteFormVisibility}
        closeAddMembersDrawer={closeAddMembersDrawer}
      />
    );
  } else {
    return (
      <div className="billing-team-invite-members-form-wrapper">
        {externalDomainEmails.length && !isExternalDomainWarningBannerClosed ? (
          <ExternalDomainWarningBanner
            emails={externalDomainEmails}
            onBannerClose={() => setIsExternalDomainWarningBannerClosed(true)}
          />
        ) : null}
        <div className="billing-team-invite-members-title">Enter email(s) to send invitation</div>
        <div className="billing-team-invite-members-instruction">
          You can invite multiple members by typing their email and pressing `Enter` key.
        </div>
        <div className="invite-emails-wrapper">
          <EmailInputWithDomainBasedSuggestions transparentBackground onChange={handleEmailsChange} />
        </div>
        <div className="billing-team-invite-members-form-actions">
          <RQButton loading={isLoading} type="primary" onClick={handleAddMembersToBillingTeam}>
            Add to billing team
          </RQButton>
          <RQButton disabled={isLoading} type="default" onClick={toggleInviteFormVisibility}>
            Back to members list
          </RQButton>
        </div>
      </div>
    );
  }
};
