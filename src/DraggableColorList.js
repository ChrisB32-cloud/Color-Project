import React from 'react';
import DraggableColorBox from './DraggableColorBox';
import { SortableContainer } from 'react-sortable-hoc';

const DraggableColorList = SortableContainer(
  ({ addedNewColor, handleDelete }) => {
    // const [passedColor, setPassedColor] = useState();

    // setPassedColor({ passedColor: addedNewColor });
    // console.log(passedColor);

    return (
      <div style={{ height: '100%' }}>
        {addedNewColor.map((c, idx) => (
          <DraggableColorBox
            color={c.color}
            theName={c.name}
            key={c.name}
            index={idx}
            handleDeleteMore={handleDelete}
          />
        ))}
      </div>
    );
  }
);

export default DraggableColorList;
