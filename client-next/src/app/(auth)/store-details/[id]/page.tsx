import StoreDetails from "@/components/StoreDetails"

export default function Page({ params: { id } }: any) {
    return <>
        <StoreDetails storeId={id} />
    </>
}