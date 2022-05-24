import CreateDOM from './CreateDOM';
import UpdatInnerContent from '../Utils/UpdateInnerContent';
import AppendDomElement from '../Utils/AppendDomElement';
import BUTTON from '../Constants/Button';

const RefreshButton = (mainElement) => {
  UpdatInnerContent(CreateDOM.btn, BUTTON.CONTENT.REFRESH);
  AppendDomElement(CreateDOM.container,CreateDOM.btn);
  AppendDomElement( mainElement,CreateDOM.container);
  return CreateDOM.btn;
};

export default RefreshButton;
