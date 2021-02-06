import { Dispatch, useEffect, useState } from "react";
import "../Css/notePage.css";

const initialValue: InterfaceNoteProps[] = [
  {
    id: 1,
    text: "Change the Washroom state of likewise others NUMBER 1",
    date: new Date().toDateString(),
  },
  {
    id: 2,
    text:
      "Someone is watching me. Washroom cool music discover others NUMBER 2",
    date: new Date().toDateString(),
  },
  {
    id: 3,
    text: "The cool weekly music to play, state of likewise others NUMBER 3.",
    date: new Date().toDateString(),
  },
];

interface InterfaceNoteProps {
  id: number;
  date: string;
  text: string;
}

export const NotePage = () => {
  return (
    <div className="Page_container notePage">
      <section className=""></section>
      <section>
        <NoteWidget />
      </section>
    </div>
  );
};
export const NoteWidget = () => {
  const [noteData, setNoteData] = useState<InterfaceNoteProps[]>(initialValue);

  return (
    <>
      {noteData.map((note, index) => {
        return (
          <div key={note.id} className="note">
            <section className="note_text">
              <textarea
                value={noteData[index].text}
                onChange={(event) => {
                  console.log(noteData);
                  setNoteData([
                    ...noteData,
                    (noteData[index] = {
                      id: 1,
                      text: "Test",
                      date: new Date().toDateString(),
                    }),
                  ]);
                }}
              />
            </section>
            <section className="note_date">
              <p>{note.date}</p>
            </section>
          </div>
        );
      })}
    </>
  );
};
