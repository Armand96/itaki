"use client";
import Loading from "@/app/loading";
import ScrollToTop from "@/common/scroll-to-top";
import useLoading from "@/store/useLoading";
import { ToastContainer } from "react-toastify";



const Wrapper = ({ children }: { children: React.ReactNode }) => {
    const loading = useLoading((state) => state.loading)


	return (
		<>
            {
                loading && ( <Loading /> )
            }
			{children}
			<ScrollToTop />
			<ToastContainer position="top-right"/>
		</>
	);
};

export default Wrapper;
