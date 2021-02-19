import { useState } from "react";
import { useTheme } from "../../Store/useTheme";
import { CreateNoteInterface, NoteProp } from "./NoteProps";
import { ReactComponent as UploadIcon } from "../../Svg/UploadIcon.svg";

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
    const fromDBid = 45; //Will Produce children with same key
    const fromDBtext = note.text;
    const fromDBDate = new Date().toDateString();
    handleCreate({ id: fromDBid, text: fromDBtext, date: fromDBDate });
    setNote({ text: "..." });
  };
  return (
    <div className='note_container'>
      <form className='note_form' onSubmit={submitToDataBase}>
        <section className='note_section'>
          <p style={Theme.p_opacity} className='note_create_text'>
            New Note
          </p>
        </section>
        <section className='note_section'>
          <textarea
            onChange={handleChange}
            value={note.text}
            name='Note'
            className='note_textarea'
          />
        </section>
        <section className='note_section note_footer'>
          <label>
            <input type='submit' />
            <UploadIcon style={Theme.nav_svg} className='note_svg_upload' />
          </label>
        </section>
      </form>
    </div>
  );
};
