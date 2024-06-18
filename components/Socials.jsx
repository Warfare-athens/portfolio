import Link from "next/link"
import { FaGithub ,FaWhatsapp , FaLinkedinIn} from "react-icons/fa"
import { TbMail } from "react-icons/tb";


const socialsLinks = [
  { icon: <TbMail/>  , path:""},
  { icon: <FaWhatsapp/>  , path:""},
  { icon: <FaLinkedinIn/>  , path:""},
  { icon: <FaGithub/>  , path:""}
]

const Socials = ({ containerStyles , iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socialsLinks.map((item, index)=>{
        return(
          <Link key={index} href={item.path} className={iconStyles}>
            {item.icon}
          </Link>
        )
      })}
    </div>
  )
}

export default Socials