import { useState } from "react";
import ProfileForm from "../components/ProfileForm/ProfileForm";
import ProfileMenu from "../components/ProfileMenu/ProfileMenu";
import { ScreenContainer } from "./ProfileScreen.styled";

function ProfileScreen() {
  const [name, setName] = useState("");
  const [bio, setBio] = useState("");
  const [urlImage, setUrlImage] = useState("");
  const [dadosForm, setDadosForm] = useState({});

  const onChangeName = (e) => {
    setName(e.target.value);
  };

  const onChangeBio = (e) => {
    setBio(e.target.value);
  };

  const onChangeUrlImage = (e) => {
    setUrlImage(e.target.value);
  };

  const update = (e) => {
    e.preventDefault();

    const newForm = {
      name,
      bio,
      urlImage,
    };

    setDadosForm(newForm);
    setName("");
    setBio("");
    setUrlImage("");
  };

  return (
    <ScreenContainer>
      <ProfileMenu dadosForm={dadosForm} />

      <ProfileForm
        name={name}
        onChangeName={onChangeName}
        bio={bio}
        onChangeBio={onChangeBio}
        urlImage={urlImage}
        onChangeUrlImage={onChangeUrlImage}
        update={update}
      />
    </ScreenContainer>
  );
}

export default ProfileScreen;
