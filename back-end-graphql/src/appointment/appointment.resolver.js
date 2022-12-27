const {
  updateAppointment,
  getUserAppointments,
  resolveTypeAppointment,
  resolveTypeAppointments,
} = require("./appointment");

module.exports = {
  Mutation: {
    getUserAppointments: getUserAppointments,
    updateAppointment: updateAppointment,
  },
  appointmentResponse: resolveTypeAppointment,
  appointmentsResponse: resolveTypeAppointments,
};
