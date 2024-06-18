import Link from "next/link"
import { FaGithub ,FaWhatsapp , FaLinkedinIn} from "react-icons/fa"
import { TbMail } from "react-icons/tb";


const socialsLinks = [
  { icon: <TbMail/>  , path:"mailto:athensdubey@gmail.com"},
  { icon: <FaWhatsapp/>  , path:"https://wa.me/7905844721"},
  { icon: <FaLinkedinIn/>  , path:"https://www.linkedin.com/in/athens-dubey-54b059203/"},
  { icon: <FaGithub/>  , path:"https://github.com/Warfare-athens"}
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