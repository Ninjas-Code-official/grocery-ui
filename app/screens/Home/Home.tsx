import React from 'react';
import { Header, Footer, LogoutModal } from './components';
import { SectionList, View } from '../../components/Themed';
import CartButton from '../../components/CartButton';
import Loading from '../../components/Loading';
import { verticalScale } from '../../constants';
import { useStore } from '../../contexts';
import { LoginModal } from "../../components/LoginModal";


export default function HomeScreen() {
  const { refetchData, loading, networkStatus } = useStore()
  if (loading) return <Loading />

  return (
    <View style={{ flex: 1, justifyContent: 'space-between' }}>
      <SectionList
        contentContainerStyle={{
          paddingBottom: verticalScale(20),
        }}
        bounces={false}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={<Header />}
        ListFooterComponent={<Footer />}
        sections={[]}
        keyExtractor={(item, index) => item + index}
        renderItem={() => null}
        onRefresh={refetchData}
        refreshing={networkStatus === 7}
      />
      <CartButton />

      {/* Login Modal */}
      
        <LoginModal />
      {/* loginModal end   */}


      {/* Logout Modal */}
           <LogoutModal />
        {/* logout modal end */}
    </View>
  );
}
