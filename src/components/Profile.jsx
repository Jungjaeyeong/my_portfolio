import { ProfileContainer } from './Profile.styled'

const Profile = () => {
	return (
		<ProfileContainer>
			<div className="profile__img " />
			<h2 className="profile__name">정재영</h2>
			<span className="profile__fe">Frontend Developer</span>
			<span>jjy8037@gmail.com</span>
			<span>010-3369-8037</span>
			<span>https://github.com/Jungjaeyeong</span>
		</ProfileContainer>
	)
}

export default Profile
