import "./App.css";
import { useRef, useCallback, useState } from "react";

function App() {
  const nextId = useRef(1);
  const [form, setForm] = useState({
    name: "",
    username: "",
  });
  const [data, setData] = useState({
    array: [],
    uselessValue: null,
  });

  // input 수정을 위한 함수
  const onChange = useCallback(
    (e) => {
      const { value, name } = e.target;
      setForm({ ...form, [name]: [value] });
    },
    [form]
  );
  // form 등록을 위한 함수
  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      const info = {
        id: nextId.current,
        name: form.name,
        username: form.username,
      };
      // array에 새 항목 등록
      setData({ ...data, array: data.array.concat(info) });
      // form 초기화
      setForm({
        name: "",
        username: "",
      });

      nextId.current += 1;
    },
    [data, form.name, form.username]
  );

  // 항목을 삭제하는 함수
  const onRemove = useCallback(
    (id) => {
      setData({
        ...data,
        array: data.array.filter((info) => info.id !== id),
      });
    },
    [data]
  );
  return (
    <div className="App">
      <form onSubmit={onSubmit}>
        <input
          name="username"
          placeholder="아이디"
          onChange={onChange}
          value={form.username}
        />
        <input
          name="name"
          placeholder="이름"
          onChange={onChange}
          value={form.name}
        />
        <button type="submit">등록</button>
      </form>
      <div>
        <ul>
          {data.array.map((item) => (
            <li key={item.id} onClick={() => onRemove(item.id)}>
              {item.username} ({item.name})
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
