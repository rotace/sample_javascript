import axios from 'axios';

async function get (url) {
  try {
    // handle success(axiosの処理が成功した場合に処理させたいことを記述)
    const res = await axios.get(url);
    console.log('GET', res.data);
    return res.data;
  } catch (error) {
    // handle error(axiosの処理にエラーが発生した場合に処理させたいことを記述)
    console.log(error);
  } finally {
    // always executed(axiosの処理結果によらずいつも実行させたい処理を記述)
  }
}

async function post(url, data) {
  try {
    // handle success(axiosの処理が成功した場合に処理させたいことを記述)
    const res = await axios.post(url, data);
    console.log('POST', res.data);
    return res.data;
  } catch (error) {
    // handle error(axiosの処理にエラーが発生した場合に処理させたいことを記述)
    console.log(error);
  } finally {
    // always executed(axiosの処理結果によらずいつも実行させたい処理を記述)
  }
}

async function del(url) {
  try {
    // handle success(axiosの処理が成功した場合に処理させたいことを記述)
    const res = await axios.delete(url);
    console.log('DELETE', res.data);
    return res.data;
  } catch (error) {
    // handle error(axiosの処理にエラーが発生した場合に処理させたいことを記述)
    console.log(error);
  } finally {
    // always executed(axiosの処理結果によらずいつも実行させたい処理を記述)
  }
}

async function put(url, data) {
  try {
    // handle success(axiosの処理が成功した場合に処理させたいことを記述)
    const res = await axios.put(url, data);
    console.log('PUT', res.data);
    return res.data;
  } catch (error) {
    // handle error(axiosの処理にエラーが発生した場合に処理させたいことを記述)
    console.log(error);
  } finally {
    // always executed(axiosの処理結果によらずいつも実行させたい処理を記述)
  }
}

export default {
  get,
  post,
  del,
  put,
};
