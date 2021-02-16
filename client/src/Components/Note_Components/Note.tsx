import { useState } from "react";
import { useTheme } from "../../Store/useTheme";
import { initialValue, NoteProp } from "./NoteProps";
import { CreateNote } from "./CreateNote";

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
    <div className="note_container">
      <form className="note_form" onSubmit={saveNote}>
        <section className="note_header note_section">
          <p style={Theme.p_opacity}>{data.date}</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            onClick={() => handleDelete(idx)}
            className="note_svg"
            style={Theme.svg_remove}
            viewBox="0 0 24 24"
          >
            <path d="M19,2H9.956A4.966,4.966,0,0,0,6.01,3.931l-5.8,7.455a1,1,0,0,0,0,1.228l5.8,7.455A4.966,4.966,0,0,0,9.956,22H19a5.006,5.006,0,0,0,5-5V7A5.006,5.006,0,0,0,19,2Zm3,15a3,3,0,0,1-3,3H9.956a2.979,2.979,0,0,1-2.368-1.158L2.267,12,7.588,5.158A2.979,2.979,0,0,1,9.956,4H19a3,3,0,0,1,3,3Zm-4.793-6.793L15.414,12l1.793,1.793a1,1,0,1,1-1.414,1.414L14,13.414l-1.793,1.793a1,1,0,0,1-1.414-1.414L12.586,12l-1.793-1.793a1,1,0,0,1,1.414-1.414L14,10.586l1.793-1.793a1,1,0,0,1,1.414,1.414Z" />
          </svg>
        </section>
        <section className="note_body note_section">
          <textarea
            className="note_textarea"
            disabled={readOnly}
            value={data.text}
            onChange={handleChange}
            name={`${data.id}`}
            id={`${data.id}`}
          />
        </section>
        <section className="note_footer note_section">
          {readOnly ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              onClick={() => setReadOnly(false)}
              className="note_svg"
              style={Theme.nav_svg}
              viewBox="0 0 24 24"
            >
              <title>edit</title>
              <path d="M18.656.93,6.464,13.122A4.966,4.966,0,0,0,5,16.657V18a1,1,0,0,0,1,1H7.343a4.966,4.966,0,0,0,3.535-1.464L23.07,5.344a3.125,3.125,0,0,0,0-4.414A3.194,3.194,0,0,0,18.656.93Zm3,3L9.464,16.122A3.02,3.02,0,0,1,7.343,17H7v-.343a3.02,3.02,0,0,1,.878-2.121L20.07,2.344a1.148,1.148,0,0,1,1.586,0A1.123,1.123,0,0,1,21.656,3.93Z" />
              <path d="M23,8.979a1,1,0,0,0-1,1V15H18a3,3,0,0,0-3,3v4H5a3,3,0,0,1-3-3V5A3,3,0,0,1,5,2h9.042a1,1,0,0,0,0-2H5A5.006,5.006,0,0,0,0,5V19a5.006,5.006,0,0,0,5,5H16.343a4.968,4.968,0,0,0,3.536-1.464l2.656-2.658A4.968,4.968,0,0,0,24,16.343V9.979A1,1,0,0,0,23,8.979ZM18.465,21.122a2.975,2.975,0,0,1-1.465.8V18a1,1,0,0,1,1-1h3.925a3.016,3.016,0,0,1-.8,1.464Z" />
            </svg>
          ) : (
            <label className="note_label">
              <input type="submit" />
              <svg
                className="note_svg"
                xmlns="http://www.w3.org/2000/svg"
                style={Theme.svg_remove}
                viewBox="0 0 24 24"
              >
                <title>save</title>
                <path d="M18.4,7.376a1.129,1.129,0,0,1-.768-.754h0a8,8,0,1,0-15.1,5.238A1.044,1.044,0,0,1,2.222,13.1,5.5,5.5,0,0,0,.055,18.3,5.624,5.624,0,0,0,5.683,23H11a1,1,0,0,0,1-1h0a1,1,0,0,0-1-1H5.683a3.615,3.615,0,0,1-3.647-2.981A3.458,3.458,0,0,1,3.412,14.7,3.022,3.022,0,0,0,4.4,11.138a6.119,6.119,0,0,1-.074-4.126A5.962,5.962,0,0,1,9.215,3.046,6.314,6.314,0,0,1,9.987,3a5.985,5.985,0,0,1,5.757,4.281,2.977,2.977,0,0,0,2.01,1.99,5.935,5.935,0,0,1,.779,11.092.977.977,0,0,0-.531.888h0a.989.989,0,0,0,1.388.916c4.135-1.988,6.381-7.216,2.88-12.266A6.941,6.941,0,0,0,18.4,7.376Z" />
                <path d="M18.709,15.291l-3-3a1,1,0,0,0-1.414,0l-3,3a1,1,0,0,0,1.414,1.415L14,15.413V23a1,1,0,0,0,2,0V15.413L17.3,16.706a1,1,0,1,0,1.414-1.415Z" />
              </svg>
            </label>
          )}
        </section>
      </form>
    </div>
  );
};