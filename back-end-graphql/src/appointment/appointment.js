const { isEmpty } = require("ramda");
const Appointment = require("./appointment.schema");

exports.updateAppointment = async (root, args) => {
  const { input } = args;
  console.log("input", input);

  //(TODO) check errors

  try {
    const { userId } = input;
    let appointment = await Appointment.findOne({ userId });

    if (appointment) {
      appointment.title = input.title;
      appointment.description = input.description;
      appointment.tags = input.tags;
    } else {
      appointment = new Appointment(input);
      appointment.createDate = Date.now();
    }

    appointment.updated = Date.now();
    await appointment.save();

    return { appointment };
  } catch (error) {
    console.log(
      "error al intentar actualizar el historial del un usuario : ",
      error
    );
    return { message: "error" };
  }
};

exports.getUserAppointments = async (root, args) => {
  const { input } = args;
  console.info("input", input);
  try {
    const { userId } = input;
    // Search user appointment
    const appointment = await Appointment.find({ userId });
    console.log("userAppointment", appointment);
    return isEmpty(appointment)
      ? { message: "No appointment available" }
      : { appointment };
  } catch (error) {
    console.error("erorr al intentar buscar el historial del usuario", error);
    res.status(400).send("hubo un error");
    return { message: "error" };
  }
};

exports.resolveTypeAppointment = {
  __resolveType(obj) {
    if (obj.message) {
      return "errorResponse";
    }
    if (obj.appointment) {
      return "appointmentSuccessResponse";
    }
  },
};

exports.resolveTypeAppointments = {
  __resolveType(obj) {
    if (obj.message) {
      return "errorResponse";
    }
    if (obj.appointment) {
      return "appointmentsSuccessResponse";
    }
  },
};
