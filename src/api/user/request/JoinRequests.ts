export class JoinRequest {
  email: string;
  name: string;
  nickname?: string;
  password: string;
  phoneNumber: string;
  profileUrl?: string;
  githubUrl?: string;
  blogUrl?: string;

  constructor(email: string,
              name: string,
              password: string,
              phoneNumber: string,
              nickname?: string,
              profileUrl?: string,
              githubUrl?: string,
              blogUrl?: string) {
    this.email = email;
    this.name = name;
    this.nickname = nickname;
    this.password = password;
    this.phoneNumber = phoneNumber;
    this.profileUrl = profileUrl;
    this.githubUrl = githubUrl;
    this.blogUrl = blogUrl;
  }
}

export class EmailCheckRequest {
  email: string

  constructor(email: string) {
    this.email = email;
  }
}

