import './MainSection.css';

function MainSection({ children }) {
  return (
    <main>
      <div className="main-section">{children}</div>
    </main>
  );
}

export default MainSection;
