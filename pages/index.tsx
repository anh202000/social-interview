import { FC, useContext } from "react";
import ModalBase from "@/components/modal/modal";
import ImageLogoSVG from "@/public/imageLogo";
import Head from "next/head";
import { useState } from "react";
import DateLogo from "@/public/dateLogo";
import TimeLogo from "@/public/time";
import LocationLogon from "@/public/locationLogo";
import CostLogo from "@/public/costLogo";
import CapacityLogo from "@/public/capacityLogo";
import { PrivacyData, TagData, listBanner } from "@/utils/mockUp_data";
import valid from "@/utils/valid/valid";
import { DataContext } from "@/utils/store/golobalState";
import { postData } from "@/utils/service";

interface Iprops {
  props: any;
}

const Home: FC<Iprops> = (props: any) => {
  const { state, dispatch }: any = useContext(DataContext);
  const [showModalUpload, setShowModalUpload] = useState<boolean>(false);
  const [manualApprove, setManualApprove] = useState(false);
  const [tagItems, seTagItems] = useState<any>([]);
  const [bannerItem, seBannerItem] = useState<string>("");

  const initialTypeDateTime = {
    date: "text",
    time: "text",
  };
  const [changeTypeDateTime, setChangeTypeDateTime] =
    useState(initialTypeDateTime);

  const initialContentForm = {
    startAt: "",
    date: "",
    time: "",
    venue: "",
    capacity: 0,
    price: 0,
    description: "",
    banner: "",
    tags: [],
    isManualApprove: false,
    privacy: "",
  };

  const [contentForm, setContentForm] = useState(initialContentForm);

  const { date, time, venue, capacity, price, description, privacy }: any =
    contentForm;

  const handleChangeInput = (e: any) => {
    const { name, value } = e.target;
    setContentForm({ ...contentForm, [name]: value });
  };

  const handleCheck = () => {
    setManualApprove(!manualApprove);
  };

  const handleChangeTags = (item: any, _idx: number) => {
    if (tagItems?.includes(item)) {
      seTagItems(tagItems?.filter((value: any) => value !== item));
    } else seTagItems([...tagItems, item]);
  };

  const handleChangeBanner = (item: any) => {
    seBannerItem(item);
    onHideUpload();
    dispatch({ type: 'NOTIFY', payload: { success: `choose banner ${bannerItem?.slice(bannerItem?.lastIndexOf('/') + 1, bannerItem?.length)} success` } })
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const body = {
      ...contentForm,
      title:
        "Web3 Founders & Designers Mixer + fireside chat with Coinbase Senior Designer & Airfoil founder",
      startAt: `${date + "T" + time + "+000"}`,
      banner: bannerItem,
      tags: tagItems,
    };

    const errMsg = valid(
      date,
      time,
      venue,
      capacity,
      description,
      bannerItem,
      privacy,
      tagItems
    );
    if (errMsg) return dispatch({ type: "NOTIFY", payload: { error: errMsg } });

    dispatch({ type: "NOTIFY", payload: { loading: true } });

    const res = await postData("social", body, null);

    if (res?.err)
      return dispatch({ type: "NOTIFY", payload: { error: res.err } });

    dispatch({ type: "NOTIFY", payload: { success: "Successfull" } });
    dispatch({ type: "ADD_SOCIAL", payload: res });

    setContentForm(initialContentForm);
    setManualApprove(false);
    seTagItems([]);
    seBannerItem("");
    setChangeTypeDateTime(initialTypeDateTime);
  };

  const onShowUpload = () => {
    setShowModalUpload(true);
  };

  const onHideUpload = () => {
    setShowModalUpload(false);
  };

  return (
    <div className="home_page">
      <Head>
        <title>Create Social</title>
      </Head>

      <ModalBase
        isShow={showModalUpload}
        onClose={onHideUpload}
        data={props}
        title={
          <h3 className="modal-title font-weight-bold">Choose a banner</h3>
        }
        onSubmit={handleChangeBanner}
      />

      <form onSubmit={handleSubmit}>
        <section className="row text-secondary my-4">
          {/* Social left */}
          <div className="col-md-5">
            {/* Social left head*/}
            <div className="container-social-left">
              <div className="container-detai-textleft mb-5">
                <p className="container-detail-text">Untitile Event</p>
              </div>

              {/* startAt */}
              <div className="row mb-4">
                <div className="col">
                  <div className="social-date-time mb-3">
                    <DateLogo />
                    <input
                      className="form-control social-input-custom"
                      name="date"
                      type={changeTypeDateTime?.date}
                      value={date}
                      placeholder="Date"
                      min="2023-03-10"
                      max="2023-04-10"
                      onFocus={() =>
                        setChangeTypeDateTime({
                          ...changeTypeDateTime,
                          date: "date",
                        })
                      }
                      onBlur={() =>
                        setChangeTypeDateTime({
                          ...changeTypeDateTime,
                          date: "text",
                        })
                      }
                      onChange={handleChangeInput}
                    />
                  </div>
                </div>

                <div className="col">
                  <div className="social-date-time mb-3">
                    <TimeLogo />
                    <input
                      className="form-control social-input-custom"
                      type={changeTypeDateTime.time}
                      name="time"
                      value={time}
                      placeholder="Time"
                      min="00:00"
                      max="23:59"
                      onFocus={() =>
                        setChangeTypeDateTime({
                          ...changeTypeDateTime,
                          time: "time",
                        })
                      }
                      onBlur={() =>
                        setChangeTypeDateTime({
                          ...changeTypeDateTime,
                          time: "text",
                        })
                      }
                      onChange={handleChangeInput}
                    />
                  </div>
                </div>
              </div>

              {/* venue */}
              <div className="row mb-1">
                <div className="col">
                  <div className="social-date-time mb-3">
                    <LocationLogon />
                    <input
                      type="text"
                      className="form-control social-input-custom1"
                      name="venue"
                      placeholder="Veneu"
                      value={venue}
                      onChange={handleChangeInput}
                    />
                  </div>
                </div>
              </div>

              {/* capacity */}
              <div className="row">
                <div className="col">
                  <div className="social-date-time mb-3">
                    <CapacityLogo />
                    <input
                      type="number"
                      className="form-control social-input-custom1"
                      name="capacity"
                      placeholder="Capacity"
                      value={capacity}
                      onChange={handleChangeInput}
                    />
                  </div>
                </div>

                {/* price */}
                <div className="col">
                  <div className="social-date-time mb-3">
                    <CostLogo />
                    <input
                      type="number"
                      className="form-control social-input-custom1"
                      name="price"
                      placeholder="Cost"
                      value={price}
                      onChange={handleChangeInput}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Social left bottom*/}
            <div className="row">
              {/* description */}
              <div className="col">
                <div className="mb-3">
                  <p>Description</p>
                  <textarea
                    className="form-control social-leftBottom-area"
                    placeholder="Desciption of your event.."
                    rows={6}
                    name="description"
                    value={description}
                    onChange={handleChangeInput}
                  ></textarea>
                </div>
              </div>
            </div>

            {/* Social left bottom*/}
            <div className="row container-social-leftbottom">
              <div className="col">
                <div className="mb-3">
                  <div className="social-leftbottom-title mb-5">
                    <p className="social-leftbottom-title-text text-decoration-none">
                      Settings
                    </p>
                  </div>

                  {/* Check box isManualApprove*/}
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      checked={manualApprove}
                      onChange={handleCheck}
                    />
                    <p className="ml-4">I want to approve attendendess</p>
                  </div>

                  {/* Radio checks privacy*/}
                  <div className="row mt-5">
                    <div className="col">
                      <div className="mb-3">
                        <p className="font-special-p">Privacy</p>

                        {PrivacyData?.map((item: any) => (
                          <div
                            className="form-check form-check-inline mr-5"
                            key={item?.id}
                          >
                            <input
                              className="form-check-input"
                              type="radio"
                              name="privacy"
                              value={item?.name}
                              id="inlineRadio1"
                              onChange={handleChangeInput}
                            />
                            <label
                              className="form-check-label"
                              htmlFor="inlineRadio1"
                            >
                              {item?.name}
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Badges pick */}
                  <div className="row mt-4">
                    <div className="col">
                      <div className="mb-3">
                        <p className="font-special-p">Tag your social</p>
                        <p>
                          Pick tags for our curation engine to work its magin
                        </p>

                        {/* Badges Selected */}
                        <div className="mb-4">
                          {tagItems?.map((item: any, idx: number) => (
                            <button
                              type="button"
                              className="btn bg-badges color"
                              onClick={() => handleChangeTags(item, idx)}
                            >
                              {item}{" "}
                              <span className="badge badge-light color">x</span>
                            </button>
                          ))}
                        </div>

                        {/* Badges Select */}
                        {TagData?.map((item: any, idx: number) => (
                          <button
                            type="button"
                            className="btn bg-badges mr-4"
                            value={item}
                            key={idx}
                            onClick={() => handleChangeTags(item, idx)}
                          >
                            {item}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Social right */}
          <div className="col-md-7">
            <div className="container-social-upload">
              <div
                className="social-upload-item"
                onClick={onShowUpload}
                data-toggle="modal"
                data-target=".bd-example-modal-lg"
              >
                <ImageLogoSVG />

                <a className="upload-item-a">Add a banner</a>
              </div>
            </div>
          </div>

          <div className="col-md-5">
            <button type="submit" className="btn btn-warning btn-submit-social">
              <p className="font-special-p pt-2"> Create social</p>
            </button>
          </div>
        </section>
      </form>
    </div>
  );
};

export async function getServerSideProps() {
  // server side rendering
  return {
    props: {
      listBanner: listBanner,
    }, // will be passed to the page component as props
  };
}

export default Home;
