import { useState } from "react";
import { useTheme } from "../../Store/useTheme";
import { CreateNoteInterface, NoteProp } from "./NoteProps";

export const CreateNote = ({
  handleCreate,
}: {
  handleCreate: (note: NoteProp) => void;
}) => {
  const { Theme } = useTheme();
  const [note, setNote] = useState<CreateNoteInterface>({
    text: "NEW NOTE...",
  });

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setNote({ text: event.target.value });
  };

  const submitToDataBase = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const fromDBid = 45;
    const fromDBtext = note.text;
    const fromDBDate = new Date().toDateString();
    handleCreate({ id: fromDBid, text: fromDBtext, date: fromDBDate });
  };
  return (
    <div className="note_container">
      <form className="note_form" onSubmit={submitToDataBase}>
        <section className="note_section">
          <p style={Theme.p_opacity} className="note_create_text">
            New Note
          </p>
        </section>
        <section className="note_section">
          <textarea
            onChange={handleChange}
            value={note.text}
            name="Note"
            className="note_textarea"
          />
        </section>
        <section className="note_section note_footer">
          <label>
            <input type="submit" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              style={Theme.nav_svg}
              className="note_svg_upload"
              viewBox="0 0 24 24"
            >
              <title>upload</title>
              <path d="M22,17v4a1,1,0,0,1-1,1H3a1,1,0,0,1-1-1V17a1,1,0,0,0-1-1H1a1,1,0,0,0-1,1v4a3,3,0,0,0,3,3H21a3,3,0,0,0,3-3V17a1,1,0,0,0-1-1h0A1,1,0,0,0,22,17Z" />
              <path d="M18.707,5.462,14.121.875a3.007,3.007,0,0,0-4.242,0L5.293,5.462A1,1,0,1,0,6.707,6.876L11,2.584V18a1,1,0,0,0,2,0V2.583l4.293,4.293a1,1,0,1,0,1.414-1.414Z" />
            </svg>
          </label>
        </section>
      </form>
    </div>
  );
};
