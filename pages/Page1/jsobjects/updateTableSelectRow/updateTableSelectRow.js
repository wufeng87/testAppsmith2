export default {
	myVar1: [],
	myVar2: {},
	myFun1: () => {
		//write code here
	},
	update_driver_in_bus: async () => {
		//use async-await or promises
		update_driver_in_bus.run().then(() => {
			select_bus_all.run();
			closeModal("select_driver_modal");
		})
	}
}