export const getWeekRange = () => {
    const currentDate = new Date();
    const dayOfWeek = currentDate.getDay();
    
    // Get the difference in days from Monday
    const diffToMonday = dayOfWeek === 0 ? -6 : 1 - dayOfWeek;
    
    // Get the start (Monday) and end (Sunday) of the week
    const startOfWeek = new Date(currentDate);
    startOfWeek.setDate(currentDate.getDate() + diffToMonday);
    startOfWeek.setHours(0, 0, 0, 0);  // Set to midnight
    
    const endOfWeek = new Date(startOfWeek);
    endOfWeek.setDate(startOfWeek.getDate() + 6);
    endOfWeek.setHours(23, 59, 59, 999);  // Set to the last millisecond of Sunday
    
    return { startOfWeek, endOfWeek };
  };