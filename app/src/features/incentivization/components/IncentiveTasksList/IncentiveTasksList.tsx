import { Collapse } from "antd";
import { CreditsProgressBar } from "../CreditsProgressbar/CreditsProgessbar";
import { IncentiveSectionHeader } from "../IncentiveSectionHeader";
import { incentiveTasksList } from "./constants/incentiveTasks";
import { PiCaretDownBold } from "@react-icons/all-files/pi/PiCaretDownBold";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { TaskHeader } from "./components/TaskHeader/TaskHeader";
import "./incentiveTasksList.scss";

export const IncentiveTasksList = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <div className="incentive-tasks-list-container">
      <IncentiveSectionHeader title="Complete onboarding and earn $65 Free credits" />
      <div className="mt-24">
        <CreditsProgressBar />
      </div>
      <div className="incentive-tasks-list">
        <Collapse
          className="incentive-tasks-list-collapse"
          expandIconPosition="end"
          expandIcon={({ isActive }) => (
            <div className="collapse-arrow-container">
              <PiCaretDownBold className={`collapse-arrow-down ${isActive ? "rotate" : ""}`} />
            </div>
          )}
        >
          {incentiveTasksList.map((task, index) => (
            <Collapse.Panel header={<TaskHeader task={task} />} key={index}>
              <div className="incentive-task-content">
                <div className="incentive-task-description">{task.description}</div>
                <div className="incentive-task-actions">
                  {task.action({
                    dispatch,
                    navigate,
                  })}
                  <div className="incentive-task-help-link">{task?.helpLink}</div>
                </div>
              </div>
            </Collapse.Panel>
          ))}
        </Collapse>
      </div>
    </div>
  );
};