import React, { useState } from "react";
import { Row, Input, Typography } from "antd";
import { BiPencil } from "@react-icons/all-files/bi/BiPencil";
import "./inlineInput.scss";

interface Props {
  value: string;
  placeholder: string;
  disabled?: boolean;
  onChange: (value: String) => void;
  onBlur?: () => void;
}

export const InlineInput: React.FC<Props> = ({ value, placeholder, onChange, onBlur, disabled = false }) => {
  const [isEditable, setIsEditable] = useState(false);

  return (
    <div className="inline-input-container">
      <Row className="inline-input-row">
        {value?.length === 0 || isEditable ? (
          <Input
            className="active-inline-input"
            onFocus={() => setIsEditable(true)}
            onBlur={() => {
              setIsEditable(false);
              onBlur?.();
            }}
            bordered={false}
            autoFocus={true}
            spellCheck={false}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder={placeholder}
            onPressEnter={() => setIsEditable(false)}
          />
        ) : (
          <div className="inactive-inline-input">
            <Typography.Text
              ellipsis={true}
              onClick={() => {
                if (!disabled) setIsEditable(true);
              }}
            >
              {value || placeholder}
            </Typography.Text>
            {!disabled && <BiPencil onClick={() => setIsEditable(true)} />}
          </div>
        )}
      </Row>
    </div>
  );
};