export interface UserState {
    loading: boolean;
    e: string;
    data: {
      firstName?: string;
      secondName?: string;
      email?: string;
      phone?: string;
      location?: string;
      postalCode?: string;
    },
    active: string;
    activities: [{activity: string, checked: boolean}, {activity: string, checked: boolean}, {activity: string, checked: boolean}];
  }
  
  export interface changeUserState {
    firstName?: string;
    secondName?: string;
    email?: string;
    phone?: string;
    location?: string;
    postalCode?: string;
  }
  
  export interface IRootState {
    userData: UserState;
    changeUserData: changeUserState;
  }
  
export interface Active {
    checked: boolean
}