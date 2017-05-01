interface Window {
    /** Provides access to the device contacts database. */
    plugins: Plugins;
}
interface Plugins{
CallNumber :CallNumber;
}
interface CallNumber {
callNumber:(success: (...args) => any, error: (...args) => any,string,boolean)=>any;
}
