import { FormEvent, useRef, useState } from "react";

const Form = () => {
  // 使用useRef方法可以避免form内容比较多的情况下影响性能，因为不会重新渲染；
  const nameRef = useRef<HTMLInputElement>(null);
  const ageRef = useRef<HTMLInputElement>(null);
  const handleSubmitUseRef = (event: FormEvent) => {
    event.preventDefault();
    const personUseRef = {
      name: nameRef.current?.value,
      age: ageRef.current?.value,
    };
    console.log(personUseRef);
  };

  const [person, setPerson] = useState({
    name: "",
    age: "",
  });
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    console.log(person);
  };
  return (
    <>
      <form onSubmit={handleSubmitUseRef} hidden={true}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input ref={nameRef} id="name" type="text" className="form-control" />
        </div>
        <div className="mb-3">
          <label htmlFor="age" className="form-label">
            Age
          </label>
          <input ref={ageRef} id="age" type="number" className="form-control" />
        </div>
        <button className="btn btn-primary" type="submit">
          Submit
        </button>
      </form>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            onChange={(event) =>
              setPerson({ ...person, name: event.target.value })
            }
            value={person.name}
            ref={nameRef}
            id="name"
            type="text"
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="age" className="form-label">
            Age
          </label>
          {/* 设置value的值有助于实现受控组件（controlled component）。受控组件的值由 React 组件的状态控制，而不是由 DOM 自己维护。
          具体来说，如果一个输入元素的 value 属性最初是 undefined 或 null，它被认为是非受控的；如果后来 value 属性被设置为一个具体的值，它就变成了受控的，这会导致错误。
           */}
          <input
            onChange={(event) =>
              setPerson({ ...person, age: event.target.value })
            }
            value={person.age}
            ref={ageRef}
            id="age"
            type="number"
            className="form-control"
          />
        </div>
        <button className="btn btn-primary" type="submit">
          Submit
        </button>
      </form>
    </>
  );
};
export default Form;
