
import { captureRef } from "react-native-view-shot";
import Share from "react-native-share";
import RNFS from "react-native-fs";

export const exportLayout = async (ref) => {
  const uri = await captureRef(ref, {
    format: "png",
    quality: 0.8
  });
  const filePath = `${RNFS.DocumentDirectoryPath}/layout.png`;
  await RNFS.moveFile(uri, filePath);
  await Share.open({ url: `file://${filePath}` });
};
