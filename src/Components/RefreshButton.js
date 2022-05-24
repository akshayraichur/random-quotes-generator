import CreateDOM from './CreateDOM';
import UpdatInnerContent from '../Utils/UpdateInnerContent';
import AppendDomElement from '../Utils/AppendDomElement';
import BUTTON from '../Constants/Button';

const RefreshButton = (mainElement) => {
  UpdatInnerContent(CreateDOM.btn, BUTTON.CONTENT.REFRESH);
  AppendDomElement( mainElement,CreateDOM.btn);
  return CreateDOM.btn;
};

export default RefreshButton;
