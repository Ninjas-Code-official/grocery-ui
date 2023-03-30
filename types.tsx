export type RootStackParamList = {
  Root: undefined;
  NotFound: undefined;
};

export type AuthStackParamList = {
  CheckEmail: undefined;
  SignIn: undefined;
  SignUp: undefined;
};

export type HomeStackParamList = {
  Home: undefined;
  Search: undefined;
  Items: {
    id: string;
    title: string;
  };
  ItemDetail: undefined;
  Cart: undefined;
  Checkout: undefined;
  InProcessOrder: undefined;
  OrderDetails: undefined;
  Orders: undefined;
  Profile: undefined;
  Address: undefined;
  AddAddress: undefined;
  EditAddress: undefined;
  Vouchers:undefined;
  SearchPlace: undefined;
  ApplyVoucher: undefined
  ReOrder : undefined;
  Settings: undefined;
  TermsAndConditions: undefined;
  PaymentMethod: undefined;
  Auth: undefined;
  PhoneNumber: undefined;
  OTP: undefined;
  CurrentLocation: undefined;
  SelectLocation: undefined;
  SelectAddress:undefined;
  DeliveryDetail: undefined;
};
export type SearchStackParamList = {
  ItemsList: undefined;
  CategoriesList: undefined;
  SubCategoriesList: { id: string };
};

export type DrawerNavigatorParamList = {
  Main: undefined
}

export type TopTabNavigatorParamList = {
  Current: undefined;
  Past: undefined;
}

export type ItemType = {
  id: string;
  title: string;
  price: number;
  image: string;
  quantity?: number;
  description?: string;
};

export type UserType = {
  id: string | undefined,
  firstName: string | undefined,
  lastName: string | undefined,
  mobile: number | undefined,
  email: string | undefined,
  logout?: boolean
  
}

export type CategoryType = {
  id: string;
  title: string;
  image: string;
  data: SubCategoryType[];
};

export type SubCategoryType = {
  id: string;
  title: string;
  data: ItemType[];
}

export type CartType = {
  items: ItemType[]
}

type regionType = {
  latitude: number;
  longitude: number;
  longitudeDelta: number;
  latitudeDelta: number;
}


export type AddressType = {
  Id:string;
  label: number;
  address: string | null;
  note:string | null;
  region: regionType | null
  selected?: boolean;
}


export type VoucherType = {
  id:number,
  title: string;
  price:number;
  minimum:number;
  validDate:string;
  code: string;
  avail?:string;
}