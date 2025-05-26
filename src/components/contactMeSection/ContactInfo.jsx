import { HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import SingleInfo from "./SingleInfo";

const ContactInfo = () => {
  return (
    <div className="flex flex-col gap-4">
      <SingleInfo text="shivamthakur9632@gmail.com" Image={HiOutlineMail} />
      <SingleInfo text="+918449936411" Image={FiPhone} />
      <SingleInfo text="Khurja, Uttar Pradesh" Image={IoLocationOutline} />
    </div>
  );
};

export default ContactInfo;
