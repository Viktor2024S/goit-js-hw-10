document
  .getElementById('promiseForm')
  .addEventListener('submit', function (event) {
    event.preventDefault();

    const delay = Number(this.delay.value);
    const state = this.state.value;

    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        if (state === 'fulfilled') {
          resolve(delay);
        } else {
          reject(delay);
        }
      }, delay);
    });

    promise
      .then(delay => {
        iziToast.success({
          title: 'Success',
          message: `✅ Fulfilled promise in ${delay}ms`,
        });
      })
      .catch(delay => {
        iziToast.error({
          title: 'Error',
          message: `❌ Rejected promise in ${delay}ms`,
        });
      })
      .finally(() => {
        this.reset();
      });
  });
