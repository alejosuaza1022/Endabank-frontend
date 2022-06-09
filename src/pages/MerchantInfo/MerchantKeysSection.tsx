import {SectionTitle} from "../../components/index";

const MerchantKeysSection = () => {
  return(
      <div id="merchantKeysContainer">
        <SectionTitle title="Keys"/>
        <div>
          <ul>
            <li>Api ID: </li>
            <li>key: </li>
          </ul>
        </div>
      </div>
  );
}

export default MerchantKeysSection;