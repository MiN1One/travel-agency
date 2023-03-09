import { useGlobalContext } from "@/contexts/GlobalContext";
import { FormEvent, memo, useCallback, useState } from "react";
import { useTranslation } from "next-i18next";
import Logo from "../Common/Logo";
import classes from "./Footer.module.scss";
import {
  CallCalling,
  Facebook,
  Youtube,
  Instagram,
  Location,
  Whatsapp,
  Sms,
} from "iconsax-react";
import classNames from "classnames";
import { IFooterData } from "@/interfaces/common.interface";
import { TbBrandTelegram } from "react-icons/tb";
import SafeHydrate from "../Common/SafeHydrate";
import { fetchData } from "@/utils/client-fetch.utils";

const socialMediaItems = [
  'facebook_link',
  'instagram_link',
  'youtube_link',
  'whatsapp_link',
  'description',
  'telegram_link',
];

const socialMediaIconsMap = {
  facebook_link: <Facebook />,
  instagram_link: <Instagram />,
  youtube_link: <Youtube />,
  whatsapp_link: <Whatsapp />,
  telegram_link: <TbBrandTelegram />,
};

const defaultForm = {
  name: "",
  email: "",
  message: "",
};

function Footer() {
  const { headData } = useGlobalContext();
  const { media } = useGlobalContext();
  const { footerData } = headData || {};
  const { t, i18n, } = useTranslation();
  const [form, setForm] = useState(defaultForm);
  const [success, setSuccess] = useState(false);

  const onSubmitForm = useCallback(async (e: FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      const response = await fetchData('/applications/', i18n.language, {
        method: 'POST',
        body: JSON.stringify({
          title: form.name,
          text: form.message,
          email: form.email,
        }),
        headers: {
          'Content-Type': 'application/json'
        },
      });
      if (response) {
        setForm(defaultForm);
        setSuccess(true);
      }
    } catch (er) {
      console.log(er);
    }
  }, [form]);

  const onFormValueChange = useCallback(
    (name: keyof typeof form, value: any) => {
      setForm((prev) => ({
        ...prev,
        [name]: value,
      }));
    },
    []
  );

  if (!footerData) return null;

  const linkEls = footerData.menus.map((link, index) => {
    return (
      <a
        key={link.id ?? index}
        href={link.link}
        className="link text--pale-dark"
        title={link.title}
      >
        {link.title}
      </a>
    );
  });

  const socialMediaLinkEls = Object.keys(footerData.company_info).map(
    (key, index) => {
      if (!socialMediaItems.includes(key)) {
        return null;
      }
      const link = footerData.company_info[key as keyof IFooterData['company_info']];
      const icon = socialMediaIconsMap[key as keyof typeof socialMediaIconsMap];
      return icon && (
        <a
          href={link}
          title={t(key)!}
          key={index}
          className="link--rounded link--dark"
        >
          {icon}
        </a>
      );
    }
  );

  return (
    <footer className={classes.footer}>
      <div className="container">
        <div className={classes.content}>
          <div className={classes.group}>
            <Logo className={classes.logo} />
            <p
              className={classNames(
                classes.text,
                "text text--pale-dark text--high"
              )}
            >
              {footerData.company_info.description}
            </p>
            <div className={classes.list}>
              <a
                href={`tel:${footerData?.company_info.phone_number}`}
                title={t("phoneNumber")!}
                className={classes.linkItem}
              >
                <span className="link--rounded link--dark">
                  <CallCalling />
                </span>
                <span className={classes.labelGroup}>
                  <span className={classes.label}>{t("telShort")}</span>
                  {footerData?.company_info.phone_number}
                </span>
              </a>
              <a
                href={`mailto:${footerData?.company_info.email}`}
                title={t("email")!}
                className={classes.linkItem}
              >
                <span className="link--rounded link--dark">
                  <Sms />
                </span>
                <span className={classes.labelGroup}>
                  <span className={classes.label}>{t("email")}</span>
                  {footerData?.company_info.email}
                </span>
              </a>
              <div className={classes.linkItem}>
                <span className="link--rounded link--dark">
                  <Location />
                </span>
                <span className={classes.labelGroup}>
                  <span className={classes.label}>{t("address")}</span>
                  {footerData?.company_info.address}
                </span>
              </div>
            </div>
            <SafeHydrate>
              {!media.mobile && (
                <div className={classes.listHorizontal}>
                  {linkEls}
                </div>
              )}
            </SafeHydrate>
          </div>
          <div className={classes.formWrapper}>
            <div className={classes.titleGroup}>
              <h6 className="heading heading--6 text--high">
                {t("contactUs")}
              </h6>
              <p className="text text--pale-dark text--high">{t("respond")}</p>
            </div>
            <form onSubmit={onSubmitForm} className={classes.form}>
              {success && (
                <span className="text text--success">
                  Your request has successfully been sent, we will get back to you very soon!
                </span>
              )}
              <input
                className="input"
                value={form.name}
                required
                placeholder={t("name")!}
                onChange={(e) => onFormValueChange("name", e.target.value)}
              />
              <input
                className="input"
                value={form.email}
                placeholder={t("email")!}
                type="email"
                required
                onChange={(e) => onFormValueChange("email", e.target.value)}
              />
              <textarea
                className="input"
                value={form.message}
                placeholder={t("message")!}
                required
                onChange={(e) => onFormValueChange("message", e.target.value)}
              />
              <button className="btn btn--green btn--fullWidth btn--regular btn--reverse">
                {t("submit")}
              </button>
            </form>
          </div>
          <div className={classes.group}>
            <div className={classes.titleGroup}>
              <h6 className="heading heading--6 text--high">
                {t("socialMedia")}
              </h6>
              <p className="text text--pale-dark text--high">
                {t("beTheFirst")}
              </p>
            </div>
            <div className={classes.socialLinks}>
              {socialMediaLinkEls}
            </div>
            <SafeHydrate>
              {media.mobile && (
                <div className={classes.listHorizontal}>
                  {linkEls}
                </div>
              )}
            </SafeHydrate>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default memo(Footer);
