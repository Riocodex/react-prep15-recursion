import React, { useState } from 'react';

// The FamilyMember component is a functional component that represents a family member.
const FamilyMember = ({ member }) => {
  // Extract the member's name and children from the props.
  const { name, children } = member;

  // Create a state variable 'showChildren' to track whether the children should be displayed.
  const [showChildren, setShowChildren] = useState(false);

  // Check if the member has children.
  const hasChildren = children && children.length > 0;

  // Define a function 'toggleChildren' to toggle the visibility of children.
  const toggleChildren = () => {
    if (hasChildren) {
      // If the member has children, toggle the 'showChildren' state.
      setShowChildren(!showChildren);
    } else {
      // If the member has no children, show an alert message.
      alert(`${name} has no children.`);
    }
  };

  return (
    <div>
      <div onClick={toggleChildren}>{name}</div>
      {showChildren && hasChildren && (
        <div style={{ marginLeft: '20px' }}>
          {children.map((child, index) => (
            <FamilyMember key={index} member={child} />
          ))}
        </div>
      )}
    </div>
  );
};

// The main App component.
const App = () => {
  // Define the family tree with John and his family members.
  const familyTree = {
    name: "John",
    children: [
      {
        name: "Mary",
        children: [],
      },
      {
        name: "Arthur",
        children: [
          {
            name: "Lily",
            children: [
              {
                name: "Hank",
                children: [],
              },
              {
                name: "Henry",
                children: [],
              },
            ],
          },
        ],
      },
    ],
  };

  return (
    <div>
      <h1>Family Tree</h1>

      {/* Render the FamilyMember component with the root of the family tree (John). */}
      <FamilyMember member={familyTree} />
    </div>
  );
};

export default App;
