import "../Css/notePage.css";
import { useTheme } from "../Store/useTheme";
import { NoteComponent } from "../Components/Note_Components/Note";

export const NotePage = () => {
  const { Theme } = useTheme();
  return (
    <div style={Theme.page} className="Page_container notePage">
      <section className="notes_header">
        <div className="notes_text">
          <p style={Theme.p_underline}>Notes</p>
        </div>
      </section>
      <section className="notes_content">
        <div className="notes_grid">
          <NoteComponent />
        </div>
      </section>
    </div>
  );
};
