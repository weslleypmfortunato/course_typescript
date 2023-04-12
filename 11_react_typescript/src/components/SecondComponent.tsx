import React from 'react';

interface Props {
  name: string
}

export default function SecondComponent (props: Props) {
  return (
    <div>
      <p>Este é o segundo component</p>
      <p>O nome dele é { props.name }</p>
    </div>
  );
}
