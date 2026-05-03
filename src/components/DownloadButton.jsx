import { useNavigate } from 'react-router-dom';
import './DownloadButton.css';

/**
 * Three-part button using PNG images:
 *   /images/btn-left.png   — left cap (fixed width)
 *   /images/btn-mid.png    — middle tile (stretches)
 *   /images/btn-right.png  — right cap (fixed width)
 *
 * Text label floats on top via absolute positioning.
 * subText is rendered below the button.
 */
export default function DownloadButton({ label, subText, to, onClick }) {
  const navigate = useNavigate();

  function handleClick() {
    if (onClick) onClick();
    else if (to) navigate(to);
  }

  return (
    <div className="dlbtn-wrapper">
      <button className="dlbtn" onClick={handleClick} aria-label={label}>
        <span className="dlbtn__left"  aria-hidden="true" />
        <span className="dlbtn__mid"   aria-hidden="true" />
        <span className="dlbtn__right" aria-hidden="true" />
        <span className="dlbtn__label">{label}</span>
      </button>

      {subText && <p className="dlbtn__sub">{subText}</p>}
    </div>
  );
}
