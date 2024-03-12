import {
  ProfileBio,
  ProfileImage,
  ProfileName,
  ProfileWrapper,
} from "./ProfileMenu.styled";

const ProfileMenu = ({ dadosForm }) => {
  return (
    <ProfileWrapper>
      <ProfileImage src={dadosForm.urlImage} alt="Profile Image" />
      <ProfileName>{dadosForm.name}</ProfileName>
      <ProfileBio>{dadosForm.bio}</ProfileBio>
    </ProfileWrapper>
  );
};

export default ProfileMenu;
