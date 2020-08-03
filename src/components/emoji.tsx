import React, { FunctionComponent } from 'react';

type EmojiProps = {
  label?: string,
  symbol: string
}

const Emoji: FunctionComponent<EmojiProps> = ({ label, symbol }) => (
  <span className="emoji"
      role="img"
      aria-label={ label ? label : "" }
      aria-hidden={ label ? "false" : "true" }>
    { symbol }
  </span>
);

export default Emoji;
