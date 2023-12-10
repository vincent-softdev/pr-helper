import React from 'react';

interface CardComponentProps {
  overline: string;
  headline: string;
  content: string;
  button1Text: string;
  button2Text: string;
  button1Hint?: string;
  button2Hint?: string;
  cardImageUrl?: string;
  onButton1Click: () => void;
  onButton2Click: () => void;
}

const CardComponent: React.FC<CardComponentProps> = ({
  overline,
  headline,
  content,
  button1Text,
  button2Text,
  button1Hint,
  button2Hint,
  cardImageUrl,
  onButton1Click,
  onButton2Click
}) => {
  return (
    <div className="card">
      <div className="card-header">
        <div className="card-content">
            <span className="overline">{overline}</span>
            <h5 className="headline">{headline}</h5>
            <p className="content">{content}</p>
        </div>
        <div className="card-image">
            {/* Placeholder for image, you can use img tag or any other method to include an image */}
            <div className="image-placeholder" style={{ backgroundImage: `url(${cardImageUrl})` }}>
            </div>
        </div>
      </div>
      <div className="card-actions">
        <button className='hover-text' onClick={onButton1Click}>
          {button1Text}
          <span className="tooltip-text" id="top">{button1Hint}</span>
        </button>
        <button className='hover-text' onClick={onButton2Click}>
          {button2Text}
          <span className="tooltip-text" id="top">{button2Hint}</span>
        </button>
      </div>
    </div>
  );
};

export default CardComponent;
