import style from './Form.module.css'

export const Form = () => {
    const count = 1;
    const name = 'Alex';

    return <form className={style.form}>
        <p>Count: {count}</p>
        <p>Name: {name}</p>
        <button type="button">Click</button>
    </form>
}