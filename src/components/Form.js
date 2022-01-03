import React, {useContext, useState} from "react";
import {AlertContext} from "../context/alert/alertContext";

export const Form = () => {
  const [value, setValue] = useState('')
  const alert = useContext(AlertContext)

  const submitHandler = (evt) => {
    evt.preventDefault()
    if (value.trim()) {
      // ...
      alert.show('Заметка была создана', 'success')
      setValue('')
    } else {
      alert.show('Введите название заметки');
    }
  }
  return (
    <form onSubmit={submitHandler}>
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          placeholder="Введите название заметики"
          value={value}
          onChange={e => setValue(e.target.value)}
        />
      </div>
    </form>
  )
}