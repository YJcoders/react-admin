import { RouterProvider } from "react-router-dom";
import router from './router'
import { ConfigProvider } from 'antd';
import zhCN from "antd/es/locale/zh_CN";

function App() {
  return (
    <ConfigProvider locale={zhCN}>
        {/* <Provider store={store}> */}
          <RouterProvider router={router} />
        {/* </Provider> */}
      </ConfigProvider>
  );
}

export default App;
