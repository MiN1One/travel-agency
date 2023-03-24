import classNames from "classnames";
import React, { memo, useState, useCallback, FormEvent } from "react";
import { useTranslation } from "next-i18next";
import classes from './Form.module.scss';
import { generatedCaptchaImage } from "@/utils/random.utils";

interface FormProps {
  children: React.ReactNode;
  title?: string;
  label?: string;
  onSubmit: () => void;
  submitTitle: string;
  status?: 'fail' | 'success' | null;
}

function Form(props: FormProps) {
  const [captcha, setCaptcha] = useState('');
  const {
    title,
    label,
    onSubmit,
    children,
    submitTitle,
    status,
  } = props;
  const { t } = useTranslation();
  const [validationCaptcha, setValidationCaptcha] = useState(
    generatedCaptchaImage()
  );
  const [error, setError] = useState('');

  const onSubmitForm = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      setError('');
      if (
        validationCaptcha.password.toLocaleLowerCase() !== 
        captcha.toLocaleLowerCase()
      )  {
        setError(t('captchaInvalid')!);
        setValidationCaptcha(generatedCaptchaImage());
        return;
      }
      onSubmit();
    }, [validationCaptcha, captcha]
  );

  return (
    <div className={classes.formWrapper}>
      {title && (
        <h2 className="heading heading--2 text--dark">
          {title}
        </h2>
      )}
      <form className={classes.form} onSubmit={onSubmitForm}>
        {status === 'success' 
          ? (
            <span className={classNames(
              "text text--success",
              classes.status
            )}>
              Your request has successfully been sent, we will get back to you very soon!
            </span>
          )
          : status === 'fail' && (
            <span className={classes.error}>
              Something went wrong, please try again.
            </span>
          )
        }
        {label && (
          <React.Fragment>
            <span className={classNames(
              "text text--dark", 
              classes.label
            )}>
              {label}
            </span>
            {error && (
              <span className={classNames(
                "text text--error", 
                classes.label
              )}>
                {error}
              </span>
            )}
          </React.Fragment>
        )}
        <div className={classes.formBody}>
          {children}
        </div>
        <div className={classes.formFooter}>
          <input 
            onChange={(e) => setCaptcha(e.target.value)}
            value={captcha}
            placeholder={t('code')!}
            required
            className={classNames(classes.captcha, 'input-light')}
          />
          <figure className={classes.image}>
            <img
              src={validationCaptcha.image}
              alt={t('captchaCode')!}
              width="15rem"
              height="5.5rem"
            />
          </figure>
        </div>
        <button 
          className={classNames(
            'btn btn--pill btn--fullWidth btn--green btn--lg', 
            classes.btn
          )} 
          type="submit"
        >
          {submitTitle}
        </button>
      </form>
    </div>
  );
}

export default memo(Form);