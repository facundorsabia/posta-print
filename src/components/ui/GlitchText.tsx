import './GlitchText.css';

interface GlitchTextProps {
  children: React.ReactNode;
  speed?: number;
  enableShadows?: boolean;
  enableOnHover?: boolean;
  className?: string;
}

const GlitchText = ({ 
  children, 
  speed = 1, 
  enableShadows = true, 
  enableOnHover = true, 
  className = '' 
}: GlitchTextProps) => {
  const inlineStyles = {
    '--after-duration': `${speed * 11}s`,
    '--before-duration': `${speed * 7}s`,
    '--after-shadow': enableShadows ? '-2px 0 red' : 'none',
    '--before-shadow': enableShadows ? '2px 0 cyan' : 'none'
  } as React.CSSProperties;

  const hoverClass = enableOnHover ? 'enable-on-hover' : '';

  return (
    <div className={`glitch ${hoverClass} ${className}`} style={inlineStyles} data-text={children}>
      {children}
    </div>
  );
};

export default GlitchText;

