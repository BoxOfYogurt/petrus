import { useState } from "react";
import { useTheme } from "../../Store/useTheme";
import { initialValue, NoteProp } from "./NoteProps";
import { CreateNote } from "./CreateNote";
import { ReactComponent as DeleteIcon } from "../../Svg/DeleteIcon.svg";
import { ReactComponent as EditIcon } from "../../Svg/EditIcon.svg";
import { ReactComponent as SaveIcon } from "../../Svg/SaveIcon.svg";

export const NoteComponent = () => {
  const [NoteData, setNoteData] = useState<NoteProp[]>(initialValue);

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (NoteData.length > 0) {
      const newArr = [...NoteData];
      const id = parseInt(event.target.id, 10);
      //SEND REQUEST TO UPDATE
      const elementIndex = NoteData.findIndex((element) => element.id === id);
      newArr[elementIndex] = {
        ...newArr[elementIndex],
        text: event.target.value,
        date: new Date().toDateString(),
      };
      setNoteData(newArr);
    }
  };
  const handleDelete = (idx: number) => {
    if (NoteData !== null) {
      const newArr = [...NoteData];
      const toBeDeleted = newArr[idx];
      //SEND REQUEST TO DELETE IF SUCCESFUL ---REMOVE ITEM AND SET STATE
      newArr.splice(idx, 1);
      console.log(toBeDeleted);
      setNoteData(newArr);
    }
  };

  const handleCreate = (note: NoteProp) => {
    const newArr = [...NoteData];
    newArr.unshift(note);
    setNoteData(newArr);
  };
  return (
    <>
      <CreateNote handleCreate={handleCreate} />
      {NoteData.length > 0
        ? NoteData.map((note, index) => (
            <Note
              key={note.id}
              data={note}
              idx={index}
              handleChange={handleChange}
              handleDelete={handleDelete}
            />
          ))
        : null}
    </>
  );
};

const Note = ({
  data,
  idx,
  handleChange,
  handleDelete,
}: {
  data: NoteProp;
  idx: number;
  handleChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  handleDelete: (idx: number) => void;
}) => {
  const [readOnly, setReadOnly] = useState<boolean>(true);
  const { Theme } = useTheme();
  const saveNote = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setReadOnly(true);
  };

  return (
    <div className='note_container'>
      <form className='note_form' onSubmit={saveNote}>
        <section className='note_header note_section'>
          <p style={Theme.p_opacity}>{data.date}</p>
          <DeleteIcon
            onClick={() => handleDelete(idx)}
            className='note_svg'
            style={Theme.svg_remove}
          />
        </section>
        <section className='note_body note_section'>
          <textarea
            className='note_textarea'
            disabled={readOnly}
            value={data.text}
            onChange={handleChange}
            name={`${data.id}`}
            id={`${data.id}`}
          />
        </section>
        <section className='note_footer note_section'>
          {readOnly ? (
            <EditIcon
              onClick={() => setReadOnly(false)}
              className='note_svg'
              style={Theme.svg_default}
            />
          ) : (
            <label className='note_label'>
              <input type='submit' />
              <SaveIcon className='note_svg' style={Theme.svg_remove} />
            </label>
          )}
        </section>
      </form>
    </div>
  );
};
