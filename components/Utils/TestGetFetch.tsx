
const TestGetFetch = async () => {
    const res = await fetch("https://qmwmfwdl-3000.uks1.devtunnels.ms/api/test",{
        method:"GET"
    }) 
    const mydata = await res.json()
    return (
        <div className="text-white font-bold">
            {mydata.data}
        </div>
    );
}

export default TestGetFetch;