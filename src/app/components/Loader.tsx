import { Cloud } from 'lucide-react'
import style from './styles/Loader.module.css'

function Loader() {
  return (
    <div className={style.loader}>
		<Cloud className={style.icon}/>
	</div>
  );
}

export default Loader;
