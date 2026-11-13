import '@styles/sectionHeader.css';

interface SectionHeaderProps {
  id?: string;
  title: string;
  count?: number;
}

function SectionHeader({ id, title, count }: SectionHeaderProps) {
  return (
    <div className="section-header">
      <h2 id={id}>{title}</h2>
      {count !== undefined && (
        <span className="section-header__count">
          {String(count).padStart(2, "0")} registros
        </span>
      )}
    </div>
  )
}

export default SectionHeader