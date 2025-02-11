import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  onClose: () => void;
}
const Alert = ({ children, onClose }: Props) => {
  return <div className="alert alert-success alert-dismissible fade show">{children}
   <button type="button" className="btn-close" onClick={onClose}></button>
  </div>
 
};

export default Alert;
