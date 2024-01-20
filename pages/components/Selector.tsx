import { useRouter } from "next/router"

const Selector = () => {
    const {push, pathname} = useRouter();
    const handleChange =   (e: React.ChangeEvent<HTMLSelectElement>)=> {
        // console.log("idioma seleccionado =>", e.target.value)
        push(pathname,pathname, { locale: e.target.value })
    }
  return (
    <select onChange={handleChange}>
      <option value="es" style={{padding: '10px', alignItems: 'center'}}>ESPAÑOL</option>
        <option value="en" style={{padding: '10px', textAlign: 'center'}}>ENGLISH</option>
    </select>
  )
}

export default Selector;
